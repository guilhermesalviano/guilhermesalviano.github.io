import { ImageResponse } from 'next/og'
import { siteConfig } from 'app/lib/site'

export const dynamic = 'force-static'

export function GET() {
  return new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full items-center justify-center bg-white"
        style={{
          background: 'linear-gradient(135deg, #E3E3E2, #1C2126)',
          color: '#ffffff',
        }}
      >
        <img
          src={siteConfig.image}
          alt={siteConfig.name}
          width="256"
          height="256"
          tw="w-32 h-32 rounded-full border-white shadow-lg"
        />
        <div tw="flex flex-col md:flex-row w-full px-4 md:items-center justify-center py-1">
          <h2 tw="flex flex-col text-5xl font-bold tracking-tight text-center">
            {siteConfig.name}
          </h2>
        </div>
        <div tw="flex items-center justify-center text-3xl text-center px-8">
          <span>{siteConfig.headline}</span>
        </div>
        <div tw="flex items-center justify-center text-xl text-center max-w-2xl px-8 pt-4">
          <span>AI Agents · LLMs · Salesforce Marketing Cloud · MarTech</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
