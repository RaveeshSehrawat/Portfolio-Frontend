import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Data Analyst & Machine Learning Enthusiast
            </h3>

            <p className="text-muted-foreground">
              With a strong foundation in data analysis and machine learning, I specialize in extracting actionable insights from complex datasets and building predictive models using Python and its key libraries.
            </p>

            <p className="text-muted-foreground">
              I am dedicated to continuous learning in the fields of AI and data science, leveraging technologies such as TensorFlow, scikit-learn, Pandas, and NumPy to deliver data-driven solutions that empower decision-making.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="beach-button">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analysis</h4>
                  <p className="text-muted-foreground">
                    Utilizing Python libraries like Pandas, NumPy, and Matplotlib to clean, analyze, and visualize data effectively.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Designing and deploying machine learning models with scikit-learn, TensorFlow, and other frameworks to solve real-world problems.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data-Driven Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects by integrating data science methodologies to deliver impactful analytics and AI-powered solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
