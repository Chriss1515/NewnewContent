import "../styles.css";
import MyResume from "./User";
const myExperience = () => {
  return (
    <>
      <div className="exp">
        <h2>LET ME ALONE</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          vero similique aut possimus quos impedit unde, labore eos voluptate
          voluptatem? Doloremque eius atque corrupti odit unde iusto reiciendis
          sint consequuntur?
        </p>
      </div>
    </>
  );
};

const Experience = () => {
  return MyResume.map((user) => (
    <>
      <div className="exp" key={user.id}>
        <h2>Formation</h2>
        {user.training.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.time}</p>
            <p>{item.desc}</p>
          </div>
        ))}
        <h2>Expérience</h2>
        {user.experiences.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.time}</p>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  ));
};

export default Experience;
