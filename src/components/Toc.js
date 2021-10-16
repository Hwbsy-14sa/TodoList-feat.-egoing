import React, {Component} from 'react';

class Toc extends Component {
    render() {
      let lists = [];
      let data = this.props.data;
      let i = 0;
      while(i < data.length) {
        lists.push(<li key={data[i].id}>
          <a
            data-id = {data[i].id}
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }} 
            href = {'/content/' + data[i].id}
            >{data[i].title}
            </a>
            </li>);
        i++;
      }
      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      )
    }
  }

export default Toc;