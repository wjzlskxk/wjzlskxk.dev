import { Briefcase, Calendar, Clock3, MapPin } from "lucide-react";
import { Divider } from "../common/Divider";
import { careerItems } from "../../constants/Carrer/carrer.constants";
import useCarrer from "../../hooks/Carrer/useCarrer";
import "./style.scss";

const Career = () => {
  const { getDurationMonths, formatDuration } = useCarrer();

  return (
    <section id="career" className="career-view">
      <div className="career-title-wrap">
        <div className="title-row">
          <Briefcase className="title-icon" />
          <h1>CAREER</h1>
        </div>
        <Divider isColored />
        <p className="subtitle">경험과 함께 성장한 과정을 기록했습니다.</p>
      </div>

      <div className="timeline">
        {careerItems.map((item, index) => {
          const durationMonths = getDurationMonths(item.period);

          return (
            <div key={item.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="dot" />
                {index !== careerItems.length - 1 && <div className="line" />}
              </div>

              <div className="card">
                <div className="card-header">
                  <div className="role-block">
                    <p className="company">{item.company}</p>
                    <h3>{item.role}</h3>
                  </div>

                  <div className="meta">
                    <div className="meta-row">
                      <Calendar size={16} />
                      <span>{item.period}</span>
                    </div>
                    <div className="meta-row">
                      <MapPin size={16} />
                      <span>{item.location}</span>
                    </div>
                    {durationMonths && (
                      <div className="meta-row">
                        <Clock3 size={16} />
                        <span>총 {formatDuration(durationMonths)}</span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="description">{item.description}</p>

                <ul className="achievements">
                  {item.achievements?.map((achievement, idx) => (
                    <li key={idx}>
                      <span className="bullet" />
                      {achievement && <span>{achievement}.</span>}
                    </li>
                  ))}
                </ul>

                <div className="stack">
                  {item.stacks.map((stack) => (
                    <span key={stack} className="badge">
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Career;
