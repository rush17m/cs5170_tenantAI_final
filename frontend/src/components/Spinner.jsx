/**
 * Loading spinner animation
 */

function Spinner() {
  return (
    <div className='relative h-12 w-12' role="status" aria-label="Loading...">
      <span className='spinner-child animate-spinner' />
      <span className='spinner-child animate-spinner-delayed' />
    </div>
  );
}

export default Spinner;