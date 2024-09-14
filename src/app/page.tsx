import Component from '@/components/ui/taken'

function Deadprojects() {
  return (
    <div className='[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_130%)]'>
      <div className='h-screen w-full grid place-items-center'>
        <div>
          <h1 className='text-8xl font-bold'>DeadProjects</h1>
          <h2 className='text-sm'> Jhon me debe empanadas 😔
          </h2>
        </div>
      </div>
      <div className="h-screen w-full grid place-items-center grid-cols-3">
        <Component 
        title='Huevo de Esis'
        imageUrl='https://preview.redd.it/8t91ofbs50t41.png?auto=webp&s=950847e23c9a90677aa068c0c9bcf0d58a8a10e5'
        content='Planeado en abril de 2024'
        readTime='20 min'
        authors={[
          {
            name: 'Jhon',
            image: 'https://media-mia3-2.cdn.whatsapp.net/v/t61.24694-24/415289555_838011247946551_6328194961902723670_n.jpg?ccb=11-4&oh=01_Q5AaIEpuzRtXoxNqVPzG-OQUh5g84Egr4knkrfKE67-j80x6&oe=66F2C445&_nc_sid=5e03e0&_nc_cat=100'
          },
          {
            name: 'Paca',
            image: 'https://media-mia3-2.cdn.whatsapp.net/v/t61.24694-24/454104764_463296389932617_9157116347106016223_n.jpg?ccb=11-4&oh=01_Q5AaIMrlziQduN-hTwdJHYHO4h53l9xYdCtxLpc_u2KUE3Uw&oe=66F2A74C&_nc_sid=5e03e0&_nc_cat=102'
          }
        ]}
        />
        <Component />
      </div>
    </div>
  )
}

export default Deadprojects