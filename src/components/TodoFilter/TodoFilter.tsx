import classNames from 'classnames';
import { FilterTodos } from '../../types/FilterTodos';

type Props = {
  handleFilterStatus: (status: FilterTodos) => void,
  todosFilterStatus: FilterTodos
};

export const TodoFilter: React.FC<Props> = ({
  handleFilterStatus,
  todosFilterStatus,
}) => {
  return (
    <nav className="filter">
      <a
        href="#/"
        className={classNames('filter__link', {
          selected: todosFilterStatus === FilterTodos.All,
        })}
        onClick={(event) => {
          event.preventDefault();
          handleFilterStatus(FilterTodos.All);
        }}
      >
        All
      </a>

      <a
        href="#/active"
        className={classNames('filter__link', {
          selected: todosFilterStatus === FilterTodos.Active,
        })}
        onClick={(event) => {
          event.preventDefault();
          handleFilterStatus(FilterTodos.Active);
        }}
      >
        Active
      </a>

      <a
        href="#/completed"
        className={classNames('filter__link', {
          selected: todosFilterStatus === FilterTodos.Completed,
        })}
        onClick={(event) => {
          event.preventDefault();
          handleFilterStatus(FilterTodos.Completed);
        }}
      >
        Completed
      </a>
    </nav>
  );
};