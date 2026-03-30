import { ArrowRight, Play } from 'lucide-react'

function Hero() {
  return (
    <section>
      <div>
        <div>
          <span>New</span>
          <span>Introducing AI-powered workflows</span>
        </div>

        <h1>
          Manage your projects
          <br />
          <span>with confidence</span>
        </h1>

        <p>
          FlowBoard helps teams organize, track, and manage their work in one
          place. Boost productivity by 10x with our intuitive project management
          platform trusted by 50,000+ teams worldwide.
        </p>

        <div>
          <button>
            <span>Start Free Trial</span>
            <ArrowRight size={18} />
          </button>
          <button>
            <Play size={18} />
            <span>Watch Demo</span>
          </button>
        </div>

        <div>
          <div>
            <div>
              <img src="https://i.pravatar.cc/40?img=1" alt="User 1" />
              <img src="https://i.pravatar.cc/40?img=2" alt="User 2" />
              <img src="https://i.pravatar.cc/40?img=3" alt="User 3" />
              <img src="https://i.pravatar.cc/40?img=4" alt="User 4" />
            </div>
            <div>
              <div>
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p>
                <span>4.9/5</span> from 2,000+ reviews
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>FlowBoard Dashboard</span>
            </div>

            <div>
              <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div>
                <div>
                  <div>
                    <p>Total Tasks</p>
                    <p>1,284</p>
                  </div>
                  <div>
                    <p>Completed</p>
                    <p>847</p>
                  </div>
                  <div>
                    <p>In Progress</p>
                    <p>312</p>
                  </div>
                  <div>
                    <p>Team Members</p>
                    <p>24</p>
                  </div>
                </div>

                <div>
                  <p>Project Progress</p>
                  <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
