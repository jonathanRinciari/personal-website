import satori from 'satori';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

// Resolve font paths relative to project root (works at build time)
const fontsDir = path.resolve('./public/fonts');
const interRegular = fs.readFileSync(path.join(fontsDir, 'Inter-Regular.ttf'));
const interBold = fs.readFileSync(path.join(fontsDir, 'Inter-Bold.ttf'));

export async function generateOgImage(
  title: string,
  description: string,
): Promise<Buffer> {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px',
          width: '100%',
          height: '100%',
          backgroundColor: '#F8FAFC',
          fontFamily: 'Inter',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                fontSize: '14px',
                color: '#2563EB',
                fontWeight: 600,
                marginBottom: '16px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase' as const,
              },
              children: 'jonrinciari.dev',
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: '48px',
                fontWeight: 700,
                color: '#0F172A',
                lineHeight: 1.2,
                marginBottom: '16px',
              },
              children: title,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: '20px',
                color: '#475569',
                lineHeight: 1.5,
              },
              children: description,
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: interRegular.buffer as ArrayBuffer,
          weight: 400,
          style: 'normal' as const,
        },
        {
          name: 'Inter',
          data: interBold.buffer as ArrayBuffer,
          weight: 700,
          style: 'normal' as const,
        },
      ],
    },
  );

  return sharp(Buffer.from(svg)).png().toBuffer();
}
