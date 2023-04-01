import sisterphoto from "../images/photos/Lucia7.jpeg"
import Image from 'next/image'

const features = [
    {
      name: '',
      description:
        `Your sister is lost. A mysterious darkness swept through your village. When the dark cloud cleared you were the only one left. Play as Lucia and step into the region of Erleana. Harness the power of the 7 celestial guardians and find your sister before it's too late.`,
    },
  ]
  
  export default function Story() {
    return (
      <div id="Story" className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <div className="border-b border-gray-200 pb-10">
                <h2 className="font-medium text-gray-500">A plague of shadows</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Story</p>
              </div>
  
              <dl className="mt-10 space-y-10">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt className="text-sm font-medium text-gray-900">{feature.name}</dt>
                    <dd className="mt-3 text-sm text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
  
            <div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={sisterphoto}
                  alt="A girl holding a basket"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  