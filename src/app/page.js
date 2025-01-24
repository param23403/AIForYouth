export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <div className="container mx-auto px-8 py-12 sm:px-12 sm:py-16">
        <div className="prose-xl max-w-none">
          <div className="flex justify-center items-center gap-8">
            <img
              src="/assets/classroom.png"
              alt="classroom1"
              className="w-1/4 h-auto object-cover"
            />
            <br />
            <img
              src="/assets/classroom2.png"
              alt="classroom2"
              className="w-1/4 h-auto object-cover"
            />
          </div>
          <br />
          <p className="text-lg sm:text-xl font-semibold text-gray-800 leading-relaxed">
            The AI for Youth ExLent Explorations project focuses on
            democratizing access to cutting-edge artificial intelligence (AI)
            education, ensuring inclusivity for students from diverse
            backgrounds, particularly underrepresented minorities and low-income
            high school students. The program aims to prepare the next
            generation of AI innovators by addressing challenges like
            insufficient teacher training and the absence of a structured AI
            curriculum in underrepresented schools. It emphasizes equity and
            fairness in AI education to empower students to pursue AI-related
            careers and use AI to address social issues.
          </p>
          <br />
          <br />
          <p className="text-lg sm:text-xl font-semibold text-gray-800 leading-relaxed">
            The initiative also supports high school teachers by providing
            training in AI, enabling them to deliver an innovative curriculum
            designed to inspire students. It combines transformative learning
            experiences with skill development in communication, leadership,
            teamwork, and critical thinking. Key features include a paid
            internship program for students, mentorship pairings between
            faculty, graduate students, teachers, and students, and team-based,
            action-oriented activities. Overall, the project seeks to build a
            diverse, ethical AI workforce equipped to solve real-world
            challenges while promoting inclusivity and equity in AI education
            and innovation.
          </p>
          <br />
          <br />
          <div className="text-lg sm:text-xl font-semibold text-gray-800 leading-relaxed">
            <a
              href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2347281"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to National Science Foundation Award
            </a>
          </div>
          <br />
          <br />
          <div className="text-lg sm:text-xl font-semibold text-gray-800 leading-relaxed">
            We are looking to hire high school teachers for our project. Find
            application information{" "}
            <a
              href="https://aiforyouth.engineering.virginia.edu/application"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </div>
          <br />
          <br />
          <div className="text-lg sm:text-xl font-semibold text-gray-800 leading-relaxed">
            We are also looking for companies to join us in our project. Please
            fill out the{" "}
            <a
              href="https://aiforyouth.engineering.virginia.edu/contact"
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact form{" "}
            </a>
            if you are interested.
          </div>
          <br />
          <br />
          <div className="flex justify-center items-center gap-8">
            <img
              src="/assets/uva-Logo.png"
              alt="UVA logo"
              className="w-1/4 h-auto object-cover"
            />
            <img
              src="/assets/nsf-logo.png"
              alt="NSF logo"
              className="w-1/4 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
