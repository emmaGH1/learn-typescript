import { useState } from "react";

import Heading from "../components/Heading"
import Section from "../components/Section"
import Counter from "../components/Counter";
import List from "../components/List";

const FirstPage = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading title="The Beginning" />
      <Section title="Content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum enim harum veniam quo hic fugit eaque, veritatis facere temporibus voluptatum delectus sunt nobis quibusdam, aliquid at consectetur unde dolore deleniti! 
      </Section>
      <Counter setCount={setCount}>
        <div>{count}</div>
      </Counter>
      <List items={['play games', 'play soccer', 'watch anime']} render={(item: string) => <span className="bold gold">{item}</span>} />
    </>
  )
}

export default FirstPage