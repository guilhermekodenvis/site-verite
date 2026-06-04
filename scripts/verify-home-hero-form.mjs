import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../src/app/page.tsx', import.meta.url), 'utf8')

const checks = [
  {
    label: 'uses the previous hero photo as the desktop full-bleed background',
    pattern: 'src="/images/socias.png"',
  },
  {
    label: 'keeps the new form desktop-only',
    pattern: 'hidden lg:block',
  },
  {
    label: 'defines home hero form state',
    pattern: 'heroFormData',
  },
  {
    label: 'submits to the contact page webhook',
    pattern: 'https://black-elephant.app.n8n.cloud/webhook/verite-contact-form',
  },
  {
    label: 'includes required full name field',
    pattern: 'name="nome"',
  },
  {
    label: 'includes required email field',
    pattern: 'name="email"',
  },
  {
    label: 'includes required phone field',
    pattern: 'name="telefone"',
  },
  {
    label: 'includes required message field',
    pattern: 'name="mensagem"',
  },
  {
    label: 'uses a white 1px glass border',
    pattern: 'border-white',
  },
]

const failures = checks.filter((check) => !source.includes(check.pattern))

if (source.includes('absolute inset-x-6 top-0 h-px')) {
  failures.push({
    label: 'does not render an extra top border inside the hero form',
    pattern: 'remove absolute inset-x-6 top-0 h-px',
  })
}

if (failures.length > 0) {
  console.error('Home hero form verification failed:')
  for (const failure of failures) {
    console.error(`- ${failure.label} (${failure.pattern})`)
  }
  process.exit(1)
}

console.log('Home hero form verification passed.')
