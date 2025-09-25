# Vercel Edge Function - Hello

Edge Function بسيط يُظهر "Hello" ويعمل على Vercel 2025.

## بنية المشروع

```
project/
├── api/
│   └── hello.js        # Edge Function
├── package.json        # إعدادات المشروع
├── vercel.json         # إعدادات Vercel
└── README.md          # هذا الملف
```

## التثبيت والنشر

### 1. إعداد المشروع محلياً

```bash
mkdir vercel-edge-function
cd vercel-edge-function
mkdir api
```

### 2. تثبيت Vercel CLI

```bash
npm install -g vercel
```

### 3. نشر المشروع

```bash
vercel
```

### 4. تشغيل محلي للتطوير

```bash
vercel dev
```

## الاستخدام

بعد النشر، يمكن الوصول للـ function عبر:

```
https://your-project.vercel.app/api/hello
```

## المميزات

- ⚡ Edge Runtime سريع
- 🌍 يعمل على مستوى العالم
- 🔧 دعم Web APIs الحديثة
- 📱 استجابة فورية

## المتطلبات

- Node.js
- حساب Vercel
- Vercel CLI
