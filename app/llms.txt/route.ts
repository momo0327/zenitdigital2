import { COMPANY } from '@/app/constants/content';
import { BASE_URL } from '@/app/constants/seo';

// /llms.txt (llmstxt.org): a plain-text summary of the site for AI assistants.
// Built from the same constants as the pages so contact details cannot drift.
export const dynamic = 'force-static';

export function GET() {
  const { name, email, phone, address } = COMPANY;
  const body = `# ${name}

> ${name} is a design and development studio in Gothenburg, Sweden. One team designs and builds websites, mobile apps, full-stack platforms and AI integrations, from the first conversation to launch and beyond.

## Services

- [Services overview](${BASE_URL}/services): web, mobile and full-stack development, and how a project runs: understand, explore, build, keep growing.
- [Web development](${BASE_URL}/WebDev): custom web applications built with Next.js, React and TypeScript.
- [Mobile app development](${BASE_URL}/MobileDev): native iOS and Android apps, and cross-platform apps with React Native.
- [Fullstack development](${BASE_URL}/FullstackDev): frontend to backend, databases and cloud deployment.
- [AI development](${BASE_URL}/AIDev): AI integrations with Anthropic, OpenAI and Google AI, from proof of concept to production.

## Company

- [About](${BASE_URL}/about): a small team of designers and developers who build digital products end to end.
- [Work](${BASE_URL}/work): Zenia's internal products, Cal Your Friends (calyourfriends.app), an iPhone and iPad app that finds the day a group of friends is free, and ShelfWise (shelfwiseapp.com), inventory software for restaurants; plus concept projects (Hemma, Relay, Form, Atlas and Modo). None of these is client work.
- [Client portal](${BASE_URL}/portal): where clients follow progress, review designs and share feedback.
- [Contact](${BASE_URL}/contact): ${email}, ${phone}, ${address.street}, ${address.postalCode} ${address.city}, ${address.country}.

## Optional

- [Privacy policy](${BASE_URL}/privacy)
- [Terms of service](${BASE_URL}/terms)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
