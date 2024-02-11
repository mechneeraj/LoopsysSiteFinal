
import LITER from './ImageLogo/literApp.png';
const features = [
  { name: 'GOAL', description: 'digitisation of the farmer through the dairy industry' },
  { name: 'LANGUAGES', description: '9 languages includes, English, हिंदी, ਪੰਜਾਬੀ, ગુજરાતી, मराठी, বাংলা, ଓଡିଆ, ಕನ್ನಡ, తెలుగు' },
  { name: 'What Matters ?', description: 'Diditalization of farmer to get more benifits and widely accesible tools' },
  { img: LITER },

]

export default function Portfolio() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-red-800 sm:text-4xl">OUR OWN PRODUCT</h2>
          <p className="mt-4 text-black-950">
            <b>LITER APPLICATION </b>
            We help you manage
            your dairy business
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-black-950pt-4">
                <dt className="font-medium text-black-950">{feature.name}</dt>
                <dd className="mt-2 text-sm text-black-950">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-3 sm:gap-2 lg:gap-2 m-20 ">
          {/* <img
            src="https://play-lh.googleusercontent.com/CmsNhM2l7Pu3INDymV9_5fwV93Sob8A6b8cVYdBMHVF8-7iECoU63JuQXO_tm2ohjWA=w1052-h592-rw"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 w-2/4 "
          />
          <img
            src="https://play-lh.googleusercontent.com/CmsNhM2l7Pu3INDymV9_5fwV93Sob8A6b8cVYdBMHVF8-7iECoU63JuQXO_tm2ohjWA=w1052-h592-rw"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100 w-2/4 "
          /> */}
          {/* <img
            src="https://play-lh.googleusercontent.com/CmsNhM2l7Pu3INDymV9_5fwV93Sob8A6b8cVYdBMHVF8-7iECoU63JuQXO_tm2ohjWA=w1052-h592-rw"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100 w-2/4 h-2/3"
          /> */}


          {/* <img
            src=".src/LITER LOGO COLOR.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100 w-2/4 h-2/3 m-auto"
          /> */}
          {features.map((feature) => (

            <img src={feature.img} alt="" />


          ))}
        </div>
      </div>
    </div>
  )
}
