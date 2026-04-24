import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

function buildVCard(): string {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Zabeida;Vera;;;',
    'FN:ZabZabLab (Vera)',
    'ORG:ZabZabLab',
    'EMAIL;TYPE=INTERNET;TYPE=WORK:zabzablab@gmail.com',
    'URL;TYPE=WORK:https://www.hugyourwalls.com',
    'X-SOCIALPROFILE;type=instagram:https://instagram.com/zabzablab',
    'END:VCARD',
  ];
  return lines.join('\n');
}

export async function GET() {
  const vcard = buildVCard();
  const filename = 'ZabZabLab.vcf';
  return new NextResponse(vcard, {
    status: 200,
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'X-Robots-Tag': 'noindex, nofollow, noarchive',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}


