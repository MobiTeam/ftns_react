import { authorized, admin, user } from '../../constants/acl' 
const baseLink = '/dashboard';

const items = [
				{
					'title' : 'Главная',
					'link' :  baseLink,
					'roles' : authorized,
					'iconClass' : 'fa fa-home'	
				},
				// {
				// 	'title' : 'Пользователи',
				// 	'link' :  baseLink + "/users",
				// 	'roles' : [admin],
				// 	'iconClass' : 'fa fa-tasks'	
				// },
				{
					'title' : 'Результаты',
					'link' :  baseLink  + "/results",
					'roles' : authorized,
					'iconClass' : 'fa fa-tasks'	
				},
				{
					'title' : 'Статистика',
					'link' :  baseLink + "/stats",
					'roles' : authorized,
					'iconClass' : 'fa fa-bar-chart'	
				},
				{
					'title' : 'Профиль',
					'link' :  baseLink + "/profile",
					'roles' : authorized,
					'iconClass' : 'fa fa-user'	
				},
				{
					'title' : 'Календарь',
					'link' :  baseLink + "/calendar",
					'roles' : authorized,
					'iconClass' : 'fa fa-calendar'	
				},
				{
					'title' : 'Настройки',
					'link' :  baseLink + "/settings",
					'roles' : authorized,
					'iconClass' : 'fa fa-cog'	
				}
			];


export default items;
