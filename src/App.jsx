import { motion } from "framer-motion";

const portfolioVideos = [
  "https://drive.google.com/file/d/1TijxzT6khFbROSKekAQf_OU_FJHvuoj-/preview",
  "https://drive.google.com/file/d/1JEJKlOX3ok_F3CT9pH1rkXZq0WPTqq8C/preview",
  "https://drive.google.com/file/d/1gyhU6T63ap2f11uH05FKuJ3rGwgl33uf/preview",
  "https://drive.google.com/file/d/1SabcAsc3Myg4NZO8-0zeREr6AeirR9vk/preview",
  "https://drive.google.com/file/d/1Lr-HRzaGzkcDiHZz1Q0g6TJ3IuRPbcmZ/preview",
  "https://drive.google.com/file/d/1Q2Or2yKX3ubEq649FXiP2Th6t5OJEI6H/preview",
  "https://drive.google.com/file/d/1YTTVFHj2d6bIqNPtynSP8TTfRGXeTkjh/preview",
];

const services = [
  "Social Media Video Editing",
  "Instagram Reels & Shorts Editing",
  "YouTube Video Editing",
  "Promotional & Commercial Videos",
  "Motion Graphics",
  "Color Grading",
];

const skills = [
  "Video Editing",
  "Motion Graphics",
  "Color & Audio Editing",
  "Graphic Design",
  "Social Media Strategy",
  "Digital Marketing",
];

const tools = [
  "Adobe Premiere Pro",
  "After Effects",
  "Photoshop",
  "Illustrator",
  "CapCut Pro",
  "Runway ML",
  "Frame.io",
];

const experiences = [
  {
    company: "Airslide Services",
    role: "Video Editor",
    points: [
      "Edited promotional and marketing videos for digital platforms",
      "Performed color correction and audio cleanup",
      "Delivered client ready videos",
    ],
  },
  {
    company: "Ooumph Pvt Limited",
    role: "Digital Marketing & Video Editing Intern",
    points: [
      "Edited short form and long form videos",
      "Designed thumbnails and graphics",
      "Assisted digital marketing campaigns",
    ],
  },
  {
    company: "Freelance Video Editor",
    role: "Freelance",
    points: [
      "Delivered video content for YouTube, Reels and Shorts",
      "Worked with multiple brands and clients",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.08,
    },
  }),
};

function SectionHeader({ title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mb-10 text-center"
    >
      <h2 className="font-heading text-3xl font-semibold tracking-wide text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-300 sm:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

function VideoCard({ url, index }) {
  return (
    <motion.article
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-glowBlue backdrop-blur-xl"
    >
      <div className="aspect-video">
        <iframe
          src={url}
          title={`Portfolio video ${index + 1}`}
          className="h-full w-full"
          allow="autoplay"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/45 via-black/10 to-black/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="grid h-14 w-14 place-items-center rounded-full border border-white/30 bg-white/15 px-2 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-md">
          Play
        </span>
      </div>
    </motion.article>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-white">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-hero-glow" />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-neonBlue/20 blur-3xl"
        animate={{ x: [0, 35, -12, 0], y: [0, -20, 20, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed -right-20 top-1/3 -z-10 h-80 w-80 rounded-full bg-neonPurple/20 blur-3xl"
        animate={{ x: [0, -45, 18, 0], y: [0, 22, -16, 0], scale: [1, 0.94, 1.04, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#hero" className="font-heading text-lg font-semibold tracking-[0.25em]">
            ANCHAL
          </a>
          <div className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#portfolio" className="transition hover:text-neonBlue">
              Portfolio
            </a>
            <a href="#services" className="transition hover:text-neonBlue">
              Services
            </a>
            <a href="#experience" className="transition hover:text-neonBlue">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-neonBlue">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="hero"
          className="relative flex min-h-screen items-center justify-center px-5 py-20 sm:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mx-auto flex w-full max-w-5xl flex-col items-center text-center"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-neonBlue sm:text-sm">
              Crafting Stories Through Video
            </p>
            <h1 className="font-heading text-5xl font-bold tracking-[0.15em] sm:text-7xl md:text-8xl">
              ANCHAL
            </h1>
            <p className="mt-6 max-w-2xl text-base text-zinc-300 sm:text-xl">
              Professional Video Editor &amp; Digital Marketer
            </p>
            <a
              href="#portfolio"
              className="mt-10 rounded-full border border-neonBlue/70 bg-neonBlue/10 px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-glowBlue transition hover:scale-[1.02] hover:bg-neonBlue/20"
            >
              View My Work
            </a>
          </motion.div>
        </section>

        <section id="portfolio" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
          <SectionHeader title="Portfolio" />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {portfolioVideos.map((video, index) => (
              <VideoCard key={video} url={video} index={index} />
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">
          <SectionHeader title="About Me" />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-zinc-200 backdrop-blur-xl sm:p-10"
          >
            <p className="leading-relaxed">
              Hi, I am Anchal, a creative video editor and digital marketer with experience in
              content creation, editing and visual branding.
            </p>
            <p className="mt-4 leading-relaxed">
              I have worked as a Video Editor at Airslide Services and as a Digital Marketing &
              Video Editing Intern at Ooumph Pvt. Limited.
            </p>
            <p className="mt-4 leading-relaxed">
              I have also led the social media team of my college E-Cell and collaborated with
              multiple brands to create engaging digital content.
            </p>
          </motion.div>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
          <SectionHeader title="Services" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-100 backdrop-blur-xl transition hover:border-neonBlue/50 hover:bg-white/10"
              >
                {service}
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
          <SectionHeader title="Skills" />
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-zinc-200 backdrop-blur-xl transition hover:border-neonBlue/50"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        <section id="tools" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
          <SectionHeader title="Tools" />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
          >
            {tools.map((tool) => (
              <div
                key={tool}
                className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-center text-sm text-zinc-200"
              >
                {tool}
              </div>
            ))}
          </motion.div>
        </section>

        <section id="experience" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
          <SectionHeader title="Experience" />
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
              >
                <h3 className="font-heading text-2xl font-semibold text-white">{exp.company}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.1em] text-neonBlue">{exp.role}</p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-zinc-200">
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
          <SectionHeader title="Let's Work Together" />
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <p className="text-zinc-200">
                Reach out to discuss your next edit, campaign, or long-term content partnership.
              </p>
              <div className="mt-6 space-y-3 text-sm text-zinc-100">
                <p>
                  <span className="text-zinc-400">Phone:</span> +91 9555866320
                </p>
                <p>
                  <a href="mailto:anchalverma772@gmail.com" className="text-neonBlue hover:underline">
                    <span className="text-zinc-400">Email:</span> anchalverma772@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <p className="text-sm text-zinc-300">
                Quick contact works best via WhatsApp or direct email.
              </p>
              <a
                href="https://wa.me/919555866320?text=Hi%20Anchal%2C%20I%20want%20to%20discuss%20a%20video%20editing%20project."
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-neonPurple/70 bg-neonPurple/20 px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-glowPurple transition hover:scale-[1.02] hover:bg-neonPurple/30"
              >
                WhatsApp Me
              </a>
              <a
                href="mailto:anchalverma772@gmail.com?subject=Project%20Inquiry&body=Hi%20Anchal%2C%20I%20would%20like%20to%20work%20with%20you."
                className="inline-flex rounded-full border border-neonBlue/70 bg-neonBlue/10 px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-glowBlue transition hover:scale-[1.02] hover:bg-neonBlue/20"
              >
                Hire Me
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-400 sm:px-8">
        <p>&copy; 2025 Anchal</p>
        <p className="mt-1">Video Editor &amp; Digital Marketer</p>
      </footer>
    </div>
  );
}
