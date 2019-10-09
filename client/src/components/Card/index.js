const Card = props => {
  const date = new Date(props.date * 1000);
  return `<div class="card">
          <header class="card-header">
            <p class="card-header-title">
              ${props.title.toUpperCase()}
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <span>${props.noteData}</span>. <br />
              <span style="font-weight: bold;">${props.name.toUpperCase()}</span> <br />
              <span style="font-weight: bold;">${props.email}</span>
              <br />
              <time datetime="2016-1-1">
              ${date.getHours()}:${date.getMinutes()} - ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}
              </time>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
          </footer>
        </div>`;
};

export default Card;