const oneLiners = [
  <>Every other review app stores your data on their servers. We store it directly in yours.</>,
  <>Faster pages convert better. Star ratings in Google bring more clicks. Same store, more sales.</>,
  <>Reviews that load instantly - because they belong in Shopify.</>,
  <>Your shop, your data, your reviews. You are not locked in with us. Use a different service for the same data at any time.</>,
  <>From collection to display - all inside Shopify. Your shop, your data, your reviews.</>,
  'Stop slowing down your store with heavy review widgets.',
  'Native reviews. No JavaScript. No compromises.',
  'Your reviews. Your data. Your rules.',
  'Faster pages. Better SEO. Real control.',
  'Render reviews server-side. Convert more customers.',
  'Own your reviews instead of renting them.',
  'No more external scripts killing your speed.',
  'The fastest, cleanest way to show authentic reviews.',
  'Ditch the widgets. Embrace native performance.',
  'Translation included. Performance guaranteed.',
  'Built for speed. Designed for trust.',
  'Finally, reviews that don’t hurt your store.',
]

export default function LegacyMoreInfo() {
  return <section className="bg-white py-16 sm:py-32" id="more-info">
    <div className="container max-w-4xl mx-auto px-4 sm:px-8 text-center">
      <h2 className="h2 mb-6">{oneLiners[0]}</h2>
      <p className="text-gray-600 text-lg">Shopify has its own native data type for product reviews - the standard product review metaobject. Most review apps ignore it and run their own database. We built our entire product around it. Your reviews render in your theme the same way product titles do, with no external scripts and no API calls at page load. And they stay in your store forever, even after you uninstall the app.</p>
    </div>
  </section>
}
