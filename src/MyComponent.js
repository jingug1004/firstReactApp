/**
 * Created by A on 2019-07-14 오후 1:44
 * hello-react /
 * No pain, No gain!
 * What :
 * Why :
 * How :
 *
 * @author ex) 공통서비스 개발팀 김진국
 * @since ex) 2017/04/10
 * @version 1.0
 * @see
 *
 * <pre>
 * << 개정이력(Modification Information) >>
 *
 *   수정일      수정자          수정내용
 *  -------    --------    ---------------------------
 *  2017/04/21  홍길동          최초 생성
 *  2017/05/27  이몽룡          인증이 필요없는 URL을 패스하는 로직 추가
 *  </pre>
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {

    /*
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
*/
    static defaultProps = {
        name: '기본 이름'
    }

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }

    state = {
        number: 0
    }

    render() {
        return (
            <div>
                <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age} 살 입니다.</p>
                <p>숫자 : {this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }
                }>더하기
                </button>
            </div>
        )
    }
}


export default MyComponent;
