import React from 'react'
import Card from './Card'

const CardContainer = () => {

    let count = 1;

    const displayCard = () => {
        return <Card index={count++} />
    }
    const displayCards = () => {
        let cards = []
        for (let i = 0; i < 120; i++) {
            // cards.push(displayCard())
            if (count > 16) {
                continue
            }
            cards.push(<Card key={i} index={count++} />)
        }
        return cards
    }

    // const animationList = {
    //     0: 'flip-left',
    //     1: 'flip-right',
    //     2: 'flip-up',
    //     3: 'flip-down',
    //     4: 'fade-up',
    //     5: 'fade-down',
    //     6: 'fade-left',
    //     7: 'fade-right',
    //     8: 'zoom-in',
    //     9: 'zoom-out',
    //     10: 'slide-up',
    //     11: 'slide-down',
    //     12: 'slide-left',
    //     13: 'slide-right',
    // }
    

  return (
    <>
        <section className='bg-red-300/50 p-[32px] grid gap-6 grid-cols-3 md:grid-cols-4 xl:grid-cols-6 place-items-center'>
            {/* {
                // animationList.map((animation, index) => {
                //     return <Card key={index} animation={animation} />
                // })
                Object.values(animationList).map((animation, index) => {
                    console.log(index);
                    return <Card index={index} animation={animation} />
                })
            } */}


            {
                displayCards()
            }

        </section>
    </>
  )
}

export default CardContainer