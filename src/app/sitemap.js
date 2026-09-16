export default function sitemap() {
  const baseUrl = 'https://www.souzadispatch.co.uk';
  const currentDate = new Date();
  
  const staticRoutes = ['', '/about', '/contact', '/faq', '/services', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  const dynamicServices = [
    'local-moving',
    'office-removals',
    'furniture-removal',
    'man-and-van',
    'packing-services',
    'waste-removal'
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...staticRoutes, ...dynamicServices];
}
