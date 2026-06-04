# NEURIX — Company Website / موقع شركة نيوريكس

موقع تعريفي ثنائي اللغة (عربي / إنجليزي) لشركة **NEURIX** التقنية السعودية.
مبني بـ HTML / CSS / JavaScript خام — بدون أدوات بناء أو تبعيات.

A bilingual (Arabic / English) marketing site for **NEURIX**, built with plain
HTML / CSS / JavaScript — no build tools, no dependencies.

## الصفحات / Pages
| الملف | الصفحة |
|------|--------|
| `index.html`   | الرئيسية / Home |
| `about.html`   | من نحن / About |
| `services.html`| خدماتنا / Services |
| `why.html`     | لماذا نيوريكس / Why NEURIX |
| `contact.html` | تواصل معنا / Contact |

## التشغيل محلياً / Run locally
افتح `index.html` مباشرة في المتصفح، أو شغّل خادم محلي:

```bash
# Python
python -m http.server 8000
# ثم افتح / then open  http://localhost:8000
```

## تبديل اللغة / Language switching
- زر `EN` / `عربي` في الأعلى يبدّل كل النصوص والاتجاه (RTL/LTR) والخط.
- الاختيار يُحفظ في `localStorage` ويبقى ثابتاً عبر الصفحات.
- كل نص يُخزَّن في سمتين على نفس العنصر: `data-ar` و `data-en` — للتعديل، حرّر القيمتين.

## الشعار / Logo
**الصفحة الرئيسية تستخدم شعارك الأصلي تلقائياً** بمجرد ما تحفظ الصورة باسم:

```
assets/neurix-logo.png
```

إلى أن تحفظها، يظهر شعار بديل (SVG مدمج) بدون أي عطل — وبمجرد إضافة الملف
يتحوّل الـ Hero تلقائياً لشعارك الحقيقي (لا حاجة لأي تعديل في الكود).

الـ header و footer يستخدمان نسخة مصغّرة أفقية (حرف N + كلمة neurix) — وهي
الأنسب لشريط التنقّل من الشعار المربّع الكامل.

## النشر / Deploy
موقع ثابت — ينشر مباشرة على أي استضافة ثابتة:

```bash
# Vercel
npm i -g vercel
vercel
```
أو اسحب المجلد إلى Netlify / GitHub Pages / أي استضافة ملفات ثابتة.

## بيانات التواصل / Contact
- 📧 info@neurix.sa  ·  🌐 www.neurix.sa  ·  📍 الرياض، السعودية
- 📱 رقم الجوال: `+966 56 640 3355` (في `contact.html`).
