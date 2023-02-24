// En Vite debe: npm install prop-types
import PropTypes from 'prop-types'

export const FirstApp = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>Soy un subtítulo con el poto de Moka {subtitle + 0} </p>
    </>
  )
}

FirstApp.propTypes = {
  // Definimos el tipo de dato de las props y si es obligatorio al usar el componente
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,
}

// Entran antes de los props, por eso no marcan error
FirstApp.defaultProps = {
  // title: 'No hay título',
  subtitle: 'No hay subtítulo',
  name: 'Andrés',
}
