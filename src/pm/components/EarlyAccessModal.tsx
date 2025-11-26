import React from 'react';
import { Dialog, DialogContent, TextField, Button, Box, Typography, CircularProgress, FormHelperText } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface FormState { code:string; email:string }

export default function EarlyAccessModal(){
 const { t } = useTranslation();
 const [open, setOpen] = React.useState(false);
 const [loading, setLoading] = React.useState(false);
 const [success, setSuccess] = React.useState(false);
 const [error, setError] = React.useState<string | null>(null);
 const [form, setForm] = React.useState<FormState>({ code:'', email:'' });

 function submit(e: React.FormEvent){
    e.preventDefault();
    setLoading(true); setError(null);
    return fetch('https://app.costorado.com/early-access', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ code: form.code, email: form.email }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text().catch(() => '');
          let message = t('error_signup_failed');
          try {
            const data = JSON.parse(text);
            if (typeof data?.message === 'string') message = data.message;
            else if (typeof data?.error === 'string') message = data.error;
          } catch {
            if (text) message = text;
          }
          throw new Error(message);
        }
        return res;
      })
      .then(() => {
        setSuccess(true);
      })
      .catch((err: any) => {
        setError(String(err?.message || t('error_generic')));
      })
      .finally(() => {
        setLoading(false);
      });
 }

 return (
 <>
 <Button onClick={()=>setOpen(true)} variant="contained" sx={{ }}>{t('earlyAccess')}</Button>
 
 <Dialog 
    open={open} 
    onClose={()=>setOpen(false)} 
    maxWidth="sm" 
    fullWidth
    PaperProps={{
        sx: { borderRadius: 1 }
    }}
 >
 <DialogContent sx={{ p: 0 }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 3 }}>
        {!success && !error && (
            <Box component="form" onSubmit={submit} sx={{ display:'flex', flexDirection:'column', gap: 2 }}>
                <Typography variant="h5" align="center" sx={{ mb: 1, fontWeight: 500 }}>{t('CreateAccount')}</Typography>
                
                <Box>
                    <TextField 
                        fullWidth 
                        placeholder={t('EarlyAccessCode')} 
                        value={form.code} 
                        onChange={e=>setForm(f=>({...f,code:e.target.value}))} 
                        required 
                        variant="outlined"
                        size="medium"
                    />
                    <FormHelperText sx={{ mt: 1, color: 'text.secondary' }}>
                        {t('ContactUsForEarlyAccessCode')}
                    </FormHelperText>
                </Box>

                <TextField 
                    fullWidth 
                    type="email" 
                    placeholder={t('Email')} 
                    value={form.email} 
                    onChange={e=>setForm(f=>({...f,email:e.target.value}))} 
                    required 
                    variant="outlined"
                    size="medium"
                />

                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    fullWidth 
                    disabled={loading}
                    sx={{ 
                        mt: 1, 
                        textTransform: 'none',
                        fontSize: '1.25rem'
                    }}
                >
                    {loading ? <CircularProgress size={24} color="inherit" /> : t('SignUp')}
                </Button>
            </Box>
        )}

        {success && (
            <Box sx={{ textAlign: 'center', py: 2 }}>
                <Typography sx={{ mb: 2 }}>{t('SuccessCheckEmail')}</Typography>
                <Button onClick={()=>{ setOpen(false); setSuccess(false); }} variant="contained" color="secondary" sx={{ color: 'white' }}>{t('close_button')}</Button>
            </Box>
        )}

        {error && (
            <Box sx={{ textAlign: 'center', py: 2 }}>
                <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>
                <Button onClick={()=>{ setOpen(false); setError(null); }} variant="contained" color="secondary" sx={{ color: 'white' }}>{t('close_button')}</Button>
            </Box>
        )}
    </Box>
 </DialogContent>
 </Dialog>
 </>
 );
}
