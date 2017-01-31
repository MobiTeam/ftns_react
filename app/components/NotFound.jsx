import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

const NotFound = (props) => {
	return (
			<DocumentTitle title='Страница не найдена! (404)'>
				<div className="container not-found-wrapper">
					<div className="not-found-box">
						<i className="fa fa-exclamation-circle not-found-exclamation hidden-xs hidden-sm" aria-hidden="true"></i>
						<h2 className="not-found-h">Данной страницы не существует</h2>
						<p className="not-found-info">Страница, которую Вы запрашиваете, не существует. Возможно она была удалена или Вы набрали неправильный адрес.</p>
						<Link to='/'>
							<button type="button" className="btn btn-labeled btn-danger forward-btn">
								<span className="btn-label">
			            			<i className="fa fa-sign-in" aria-hidden="true"></i>
			            		</span>
			            		Вернуться на главную
			            	</button>	
						</Link>
					</div>	
				</div>
			</DocumentTitle>
		)
}

export default NotFound; 