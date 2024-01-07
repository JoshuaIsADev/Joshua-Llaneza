import image from '../img/Screenshot05.jpg';

function WorkRow() {
  return (
    <article className='container'>
      <div className='two column'>
        <img src={image} alt='' className='image' />
      </div>
      <summary className='two column'>
        <h2>Maikallaneza.com and cms</h2>
        <div className='container'>
          <div className='two column'>
            <p>
              <small>Client &nbsp;&nbsp;&nbsp;&nbsp; Maika Llaneza</small>
            </p>
          </div>
          <div className='two column'>
            <p>
              <small>Create, write, update, delete</small>
            </p>
            <br />
            <p>
              <small>
                React, React Query, Supabase, Styled components, css
              </small>
            </p>
          </div>
        </div>
      </summary>
    </article>
  );
}

export default WorkRow;
