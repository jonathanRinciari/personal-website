import React, { Component } from 'react'
import MyWritings from '../../writings';
import ItemsList from '../../components/ItemsList';

class Writings extends Component {
    
  writings = MyWritings;

  navigate = (url) => {
    this.props.history.push(url)
  }

  navigateItem = item => {
    this.props.history.push(`/writing/${item.url}`)
  }


  render() {
    return (
      <ItemsList
        activeTab="Writing"
        handleItemClick={this.navigateItem}
        items={this.writings}
        title="Articles"
        subtext={`
            I taught myself programming by using all of the amazing resources online. 
            I am blessed to have been able to type a simple search on google and find
            so many tutorials and articles to help in my learning. When I have time I
            try to share my knowledge by writing articles. I hope that you enjoy and
            can learn something new!
        `}
        handleNavigation={this.navigate}
      />
    );
  }
}

export default Writings;