import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon, LifebuoyIcon, ForwardIcon, ShieldCheckIcon, FireIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Primary Weapon',
    description:
      'Your first gift from the celestial guardians. It can be enhanced to hold many forms.',
    icon: FireIcon,
  },
  {
    name: 'Sprite Companion',
    description:
      'A support companion from the celestials. Use it to heal and launch long range attacks.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Secondary items',
    description:
      'Relics of the old war that can help tip the scales in your battle.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Dash Belt',
    description:
      'Enables speed dash to evade enemies and cross hazards. Use it wisely, there is only so much your body can take.',
    icon: ForwardIcon,
  },
]

export default function Mechanics() {
  return (
    <div id="Mechanics" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mechanics
          </h2>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
