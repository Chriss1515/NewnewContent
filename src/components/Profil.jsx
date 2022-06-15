import MyResume from "./User";

const myProfil = () => {
  return (
    <>
      <div className="profil">
        <h2>ABOUT US</h2>
        this is our profile
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          ab excepturi provident repudiandae nihil dolore aliquam minus
          cupiditate ipsa quas rem enim esse, tempore iusto quos, eaque, optio
          quo cum!
        </p>
      </div>
    </>
  );
};

const Profil = () => {
  return MyResume.map((user) => (
    <div key={user.id}>
      <h1>{user.name}</h1>
      <h2>Coordonnée</h2>
      <p>{user.coordonnees.phone}</p>
      <p>{user.coordonnees.email}</p>
      <p>{user.coordonnees.adress.suite}</p>
      <p>{user.coordonnees.adress.street}</p>
      <p>{user.coordonnees.adress.city}</p>
      <p>{user.coordonnees.adress.zipcode}</p>
    </div>
  ));
};
export default Profil;
