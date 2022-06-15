import MyResume from "./User";

const mySkills = () => {
  return (
    <>
      <div className="skill-front">
        <h2>Front-End</h2>
        <p>Anglais</p>
        <p>espagnol</p>
      </div>
      <div className="skill-back">
        <h2>Back-End</h2>
        <p>Anglais</p>
        <p>espagnol</p>
      </div>
    </>
  );
};

const Skills = () => {
  return MyResume.map((user) => (
    <>
      <div className="skill-front" key={user.id}>
        <h2>Compétences</h2>
        {user.skills.map((item) => (
          <div>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="skill-back">
        <h2>Langues</h2>
        {user.laguages.map((item) => (
          <div>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </>
  ));
};
export default Skills;
