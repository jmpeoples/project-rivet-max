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
      <div className="bg-white">
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
              {/* <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-01.jpg"
                    alt="Detail of temperature setting button on kettle bass with digital degree readout."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-feature-09-detail-02.jpg"
                    alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
  