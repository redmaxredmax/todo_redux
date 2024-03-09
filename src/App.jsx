import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "./redux/reducer/todo-reducer"
import { useForm } from "react-hook-form"
import { Card } from "./components/card"

function App() {
  const dispatch = useDispatch()
  const { handleSubmit, register, reset } = useForm()
  const submit = (data) => {
    dispatch(addTodo({ ...data, id: Date.now() }))
    reset()
  }
  const { todoList } = useSelector((state) => state.todo)

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input {...register("name")} type="text" />
        </div>
        <div>
          <input {...register("lastname")} type="text" />
        </div>
        <button >Send</button>
      </form>
      <div>
        {todoList?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default App
