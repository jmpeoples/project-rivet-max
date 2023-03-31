import city from "../images/photos/BelleOmbra.jpeg"
import Image from 'next/image'

const features = [
    {
      name: 'Explore',
      description:
        `Explore the city of Belle Ombra and take on it's dark dungeons`,
      imageSrc: city,
      imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
    {
      name: 'Fight',
      description:
        `Fight enemies with responsive combat, upgrade weapons and disover new equipment`,
      imageSrc: city,
      imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
    {
      name: 'Solve',
      description:
        `Solve the mystery of the Plague of Shadows`,
      imageSrc: city,
      imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
  
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Features() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Features</h2>
            <p className="mt-4 text-gray-500">
            A good challenge - Easy to pick up difficult to master. Enemies and hazards are more numerous as you progress
            </p>
          </div>
  
          <div className="mt-16 space-y-16">
            {features.map((feature, featureIdx) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                    'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
                  )}
                >
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                    'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
                  )}
                >
                  <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100">
                    <Image src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  