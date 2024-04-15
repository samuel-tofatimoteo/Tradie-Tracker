import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { Job, JobReview } from '../../models/jobs.ts'
import { getJobs } from '../apis/jobs.ts'
import * as api from '../apis/jobs.ts'

// Employee Hooks

export function useAllJobsByEmpId(id: number) {
  return useQuery({
    queryKey: ['jobs', id],
    queryFn: () => api.getAllJobsByEmpId(id),
  })
}

// Manager Hooks

export function useJobs() {
  return useQuery({ queryKey: ['jobs'], queryFn: () => getJobs() })
}

export function useJobById(id: number) {
  return useQuery({
    queryKey: ['job', id],
    queryFn: () => api.getJobById(id),
  })
}

export function useEditJobById() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (input: Job) => api.editJobById(input),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['jobs'] }),
  })
}

export function useAddReview() {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (input: JobReview) => api.addReview(input.review, input.data),
    onSuccess: () => client.invalidateQueries({ queryKey: ['jobs'] }),
  })
}

export function useCompletedJobs() {
  return useQuery({
    queryKey: ['jobs'],
    queryFn: () => api.getCompletedJobs(),
  })
}
