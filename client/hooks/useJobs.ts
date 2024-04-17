import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { EditJob, Job, JobReview, Jobs } from '../../models/jobs.ts'

import { getJobs } from '../apis/jobs.ts'
import * as api from '../apis/jobs.ts'

// Manager add job
export function useCreateJob() {
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (input: Jobs) => api.createJob(input),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['newJob'] }),
  })
}

// Employee Hooks

export function useAllJobsByEmpId(id: number) {
  return useQuery({
    queryKey: ['jobs', id],
    queryFn: () => api.getAllJobsByEmpId(id),
  })
}

export function useJobByEmpId(empId: number, jobId: number) {
  return useQuery({
    queryKey: ['job'],
    queryFn: () => api.getJobByEmpId(empId, jobId),
  })
}

export function useEditJobByEmpId() {
  // const input = { empId, jobId, data }
  const qc = useQueryClient()
  return useMutation({
    mutationFn: (input: EditJob) => api.editJobByEmpId(input),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['employeeJob'] }),
  })
}

//OLD STUFF
export function useJobs() {
  return useQuery({ queryKey: ['jobs'], queryFn: () => getJobs() })
}

export function useJobById(id: number) {
  return useQuery({
    queryKey: ['job'],
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
    queryKey: ['CompJobs'],
    queryFn: () => api.getCompletedJobs(),
  })
}
