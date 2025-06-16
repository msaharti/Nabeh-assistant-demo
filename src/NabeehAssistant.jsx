
import React, { useState } from 'react';

export default function NabeehAssistant() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = () => {
    const lower = query.toLowerCase();
    if (lower.includes('منصة الخبير الرسمية')) {
      setResponse('منصة الخبير الرسمية للتداول هي alkhabeertadawul.com، ويمكن أيضًا التداول عبر منصات وساطة مرخصة مثل الأهلي والراجحي ودراية.');
    } else if (lower.includes('هل طلب تحويل مبلغ يعني احتيال')) {
      setResponse('إذا طُلب منك تحويل مبلغ لحساب شخصي أو غير رسمي، فقد يكون ذلك مؤشرًا على محاولة احتيال. ننصح بعدم التفاعل والإبلاغ فورًا.');
    } else if (lower.includes('موظف طلب مني بيانات الدخول')) {
      setResponse('لا يحق لأي موظف طلب اسم المستخدم أو كلمة المرور أو الرموز السرية. يحق له فقط طلب رقم المحفظة للتحقق.');
    } else if (lower.includes('كيف أبلغ عن احتيال')) {
      setResponse('يمكنك الإبلاغ عن محاولة احتيال من خلال مركز البلاغات الأمنية 330330 أو أقرب مركز شرطة.');
    } else if (lower.includes('من أنت')) {
      setResponse('أنا نبيه، تم تصميمي بواسطة الموظف مهند سحرتي لتوعية المستثمرين ومساعدتهم على تجنب الاحتيال واتخاذ قرارات آمنة.');
    } else {
      setResponse('شكرًا لسؤالك. جاري تطويري لتغطية المزيد من المواضيع. حاول بصيغة مختلفة أو اسأل عن نقطة محددة في التوعية المالية.');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial' }}>
      <h2>🛡️ نبيه – مستشارك الذكي للتوعية</h2>
      <p>اكتب سؤالك حول الاحتيال أو الجهات الرسمية وسأجيبك فورًا:</p>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="مثال: ما هي منصة الخبير الرسمية للتداول؟"
        style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '10px' }}
      />
      <button onClick={handleAsk} style={{ padding: '10px 20px', fontSize: '16px' }}>اسأل نبيه</button>
      {response && (
        <div style={{ marginTop: '20px', background: '#f5f5f5', padding: '15px', borderRadius: '6px' }}>
          <strong>نبيه:</strong> {response}
          <button onClick={handleCopy} style={{ marginLeft: '10px' }}>نسخ الرد</button>
        </div>
      )}
    </div>
  );
}
