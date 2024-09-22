import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Created</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Something</td>
              <td>25 minutes</td>
              <td>3 months ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Something</td>
              <td>20 minutes</td>
              <td>3 months ago</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Something</td>
              <td>40 minutes</td>
              <td>3 months ago</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
