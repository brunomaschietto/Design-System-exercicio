import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Card from './components/Card'
import tenis1 from './assets/tenis1.webp'
import tenis2 from './assets/tenis2.webp'
import tenis3 from './assets/tenis3.webp'
import { Container } from './components/Container'

function App() {
  const [produtos, setProdutos] = useState([{id: 1,image: tenis1, brand: 'Nike', name: 'AIR JORDAN 1 RETRO HIGH OG', color: 'gray', priceDescount: 180, priceNormal: 246}, {id: 2, image:tenis2,  brand: 'Nike', name: 'AIR JORDAN 1 MID SE MASCULINO',color: 'pink', priceDescount: 165, priceNormal: 208}, {id: 3, image:tenis3, brand: 'Nike', name: "WOMEN'S AIR JORDAN 1 RETRO HIGH OG", color: 'blue', priceDescount: 185, priceNormal: 250}])

  return (
    <Container>
    <ChakraProvider>
      {produtos.map((produto) => { 
        return <Card key={produto.id} produto={produto}/>
      })}
      
    </ChakraProvider>
    </Container>
  )
}

export default App
