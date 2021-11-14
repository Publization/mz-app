import './index.css';

function User({id, title, firstName, lastName, picture}) {
  return (
    <div className="user" key={id}>
      <img src={picture} className="user-image" />
      <div className="table">
          <div>
              <div>Id</div>
              <div>First Name</div>
              <div>Last Name</div>
              <div>Title</div>
          </div>
          <div>
              <div>{id}</div>
              <div>{firstName}</div>
              <div>{lastName}</div>
              <div className={title=="mr"? "mr":"ms"}>{title}</div>
          </div>
      </div>
    </div>
  );
}

export default User;
