import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { JobReview } from '../../models/jobs.ts'

import * as api from '../apis/jobs.ts'

export function useJobs() {
  const query = useQuery({ queryKey: ['jobs'], queryFn: api.getJobs })
  return {
    ...query,
  }
}

export function useAddReview() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (input: JobReview) => api.addReview(input.review, input.data),
    onSuccess: () => client.invalidateQueries({ queryKey: ['jobs'] }),
  })
}

// export function useFruitsMutation<TData = unknown, TVariables = unknown>(
//   mutationFn: MutationFunction<TData, TVariables>
// ) {
//   const queryClient = useQueryClient()
//   const mutation = useMutation({
//     mutationFn,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['fruits'] })
//     },
//   })

//   return mutation
// }
