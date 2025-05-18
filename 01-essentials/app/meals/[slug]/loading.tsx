// reserved filename - will display when any await calls are pending
export default function Loading() {
  return (
    <p
      className='highlight'
      style={{
          fontSize: '1.5rem',
        fontWeight: 700,
             width: 'fit-content',
            margin: '5% auto',
      }}
    >
      Loading....
    </p>
  );
}
