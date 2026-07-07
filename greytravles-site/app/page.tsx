const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Luxury flight concierge",
    description: "Private jet coordination, first-class upgrades and seamless airport transfers tailored to your itinerary.",
  },
  {
    title: "Visa and passport concierge",
    description: "Fast-track visa processing, passport renewal and global travel documentation for stress-free departures.",
  },
  {
    title: "Premium residences",
    description: "Handpicked villas, penthouses and resort suites in the world’s most desirable destinations.",
  },
  {
    title: "Tailored experiences",
    description: "Curated events, private dining, yacht charters and cultural access crafted around your desires.",
  },
  {
    title: "Ground transport excellence",
    description: "Executive SUV, luxury sedan and exotic car rentals with professional drivers and VIP arrival service.",
  },
  {
    title: "24/7 concierge support",
    description: "Real-time travel management from departure to return, with a commitment to effortless luxury.",
  },
];

const destinations = [
  {
    name: "Dubai",
    description: "Burj Khalifa sunsets, private yacht days and five-star city glamour.",
    image: "/images/IMG_9056.jpeg",
  },
  {
    name: "Monaco",
    description: "Monte Carlo harbors, superyachts and couture seaside evenings.",
    image: "/images/IMG_9059.jpeg",
  },
  {
    name: "Maldives",
    description: "Private overwater villas, turquoise lagoons and exclusive island retreats.",
    image: "/images/IMG_9057.jpeg",
  },
  {
    name: "Cape Town",
    description: "Table Mountain views, Camps Bay evenings and bespoke coastal journeys.",
    image: "/images/IMG_9055.jpeg",
  },
  {
    name: "Seychelles",
    description: "White-sand beaches, granite boulders and beachfront luxury beneath the stars.",
    image: "/images/IMG_9060.jpeg",
  },
  {
    name: "Qatar",
    description: "Doha skylines, luxury hotels and sunset dhow cruises along the Corniche.",
    image: "/images/IMG_9058.jpeg",
  },
];

const reasons = [
  {
    title: "Privileged access",
    detail: "VIP entry to suites, events, restaurants and private lounges reserved exclusively for GreyTravles clients.",
  },
  {
    title: "Crafted for individuals",
    detail: "Every itinerary is shaped around your ambitions, tastes and schedule — never a standard package.",
  },
  {
    title: "Trusted global network",
    detail: "We partner with premium hotels, aviation specialists and concierge teams across the world.",
  },
];

const testimonials = [
  {
    quote: "GreyTravles transformed our anniversary journey into an effortless celebration. Every detail felt personal, refined and unforgettable.",
    author: "Amina & David",
    role: "Global hospitality executives",
  },
  {
    quote: "From visa support to private transfers, the service was impeccable. We arrived relaxed and truly taken care of.",
    author: "Olivia Martins",
    role: "Luxury lifestyle curator",
  },
  {
    quote: "A flawless travel partner that understands discreet luxury. The experience was polished, punctual and beautifully orchestrated.",
    author: "The Stone Family",
    role: "Entrepreneurs",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af37] bg-[#111111]/90 text-base font-semibold text-[#d4af37]">G</div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">GreyTravles</p>
              <p className="text-xs text-zinc-400">Luxury Travel Agency</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.25em] text-zinc-300 lg:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full border border-[#d4af37] px-5 py-2 text-sm font-semibold text-[#d4af37] transition hover:bg-[#d4af37] hover:text-black lg:inline-flex"
          >
            Book Consultation
          </a>
        </div>
      </header>

      <section
  id="home"
  className="relative min-h-screen overflow-hidden pt-24 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/IMG_9061.jpeg')" }}
>
         <div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/IMG_9061.jpeg')" }}
></div>

 <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#050505]"></div>
<div className="absolute inset-0 bg-black/50"></div>
      

        <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#f9e5a1]">
              Bespoke Luxury Travel Concierge
            </span>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              Luxury journeys, thoughtfully designed for every destination.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              From private jet planning and visa concierge to tailored villas, premium transfers and exclusive experiences, we design journeys with precision, discretion and elevated comfort.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-7 py-3 text-base font-semibold text-black transition hover:bg-[#f3d26c]"
              >
                Plan Your Escape
              </a>
              <a
                href="https://wa.me/2349137087519"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-base font-semibold text-white transition hover:border-[#d4af37] hover:bg-[#111111]"
              >
                WhatsApp Concierge
              </a> 
             </div>
          </div>
      </section>
      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">Services</p>
            <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Everything your world-class escape requires.</h2>
          </div>
          <p className="max-w-2xl text-zinc-400">
            Visa expertise, private transport, accommodation curation and custom experiences delivered with precision, discretion and a flawless luxury standard.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]/80 p-7 transition hover:-translate-y-1 hover:border-[#d4af37]/30 hover:shadow-[0_20px_60px_rgba(212,175,55,0.16)]">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#d4af37]/10 text-2xl text-[#d4af37]">★</div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="destinations" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">Popular destinations</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Destinations designed for the modern luxury traveler.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination) => (
            <article key={destination.name} className="group relative h-[24rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111]/80 shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition hover:-translate-y-1">
              <img
                src={destination.image}
                alt={destination.name}
                className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.8))]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-[#d4af37]">{destination.name}</p>
                <p className="mt-3 text-lg font-semibold">{destination.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-[#111111]/80 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">Why choose us</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">A travel partner built for those who expect more.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              GreyTravles delivers privacy, prestige and a seamless experience across every touchpoint — so your journey feels as exceptional as the destination.
            </p>
          </div>

          <div className="grid gap-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-[1.75rem] border border-white/10 bg-[#111111]/85 p-8 transition hover:border-[#d4af37]/30 hover:shadow-[0_20px_50px_rgba(212,175,55,0.14)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37]/10 text-2xl text-[#d4af37]">✓</div>
                <h3 className="mt-5 text-2xl font-semibold text-white">{reason.title}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-400">{reason.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">Testimonials</p>
          <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Trusted by travelers who demand impeccable service.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="rounded-[2rem] border border-white/10 bg-[#111111]/85 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <p className="text-lg leading-8 text-zinc-300">“{testimonial.quote}”</p>
              <div className="mt-8">
                <p className="text-base font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[0.95fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#111111]/85 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">Get in touch</p>
            <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Begin your exclusive GreyTravles journey.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Share your preferred destination and travel dates. Our concierge team will respond with a tailored proposal and white-glove guidance.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#0c0c0c]/95 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Office</p>
                <p className="mt-4 text-lg font-semibold text-white">Lagos, Nigeria</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#0c0c0c]/95 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Availability</p>
                <p className="mt-4 text-lg font-semibold text-white">24/7 private support</p>
              </div>
            </div>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-[#111111]/95 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className="space-y-6">
              <label className="block text-sm uppercase tracking-[0.25em] text-zinc-400" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-3xl border border-white/10 bg-[#0d0d0d] px-5 py-4 text-white outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
              />
            </div>
            <div className="mt-6 space-y-6">
              <div>
                <label className="block text-sm uppercase tracking-[0.25em] text-zinc-400" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="support@greytravles.com"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-[#0d0d0d] px-5 py-4 text-white outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-[0.25em] text-zinc-400" htmlFor="destination">
                  Destination
                </label>
                <input
                  id="destination"
                  type="text"
                  placeholder="Dubai, Monaco, Maldives..."
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-[#0d0d0d] px-5 py-4 text-white outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-[0.25em] text-zinc-400" htmlFor="message">
                  Travel notes
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your ideal journey"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-[#0d0d0d] px-5 py-4 text-white outline-none transition focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#d4af37] px-7 py-4 text-base font-semibold text-black transition hover:bg-[#f3d26c]"
            >
              Send request
            </button>
          </form>
        </div>
      </section>

      <a
        href="https://wa.me/2349137087519"
        target="_blank"
        rel="noreferrer"
        className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25d366] px-5 py-4 text-sm font-semibold text-black shadow-[0_20px_60px_rgba(37,211,102,0.25)] transition hover:bg-[#1ebe5d]"
      >
        <span className="text-xl">💬</span>
        WhatsApp
      </a>

      <footer className="border-t border-white/10 bg-[#040404] px-6 py-12 text-zinc-400 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]">GreyTravles</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Luxury travel. Seamless service.</h2>
            <p className="mt-4 text-zinc-400">
              Empowering travelers with elevated journeys, exceptional support and unforgettable moments across the world.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Contact</p>
              <p className="mt-4 text-white">support@greytravles.com</p>
              <p className="mt-2">+234 913 708 7519</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Services</p>
              <p className="mt-4">Visa concierge</p>
              <p className="mt-2">Luxury accommodations</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Social</p>
              <p className="mt-4">Private onboarding</p>
              <p className="mt-2">VIP travel experiences</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} GreyTravles. Designed for discerning travelers.
        </div>
      </footer>
    </main>
  );
}
x