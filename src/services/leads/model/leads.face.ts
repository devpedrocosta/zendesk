export enum ETicketDataType {
    Email,
    ConsumerName,
    Bot,
    GenericIdentification
  }
  export type TicketExternalData = {
    datatype: ETicketDataType
    key: string
    value: string
  }
  
  export type TicketUser = { user: string }
  
  export type TicketFilters = {
    userId?: string
    groupId?: string
    responsibleId?: string
    creatorId?: string
    startDate?: number
    endDate?: number
    dateInfo?: 'createDate' | 'endDate'
    sort?: 'number' | 'subject' | 'group' | 'type' | 'deadline'
    desc?: boolean
    externalData?: string
    number?: string
  }
  export type TicketComment = { creator: string, content: string, public: boolean }
  export type TicketCommentResponse = { id: string, date: number, user: {id: string, name: string }, content: string, public: boolean}
  export type Pagination = { startDate: number, endDate: number }
  
  export type CommentsFilter = {
    startDate: number
    endDate: number
    userId?: string
  }
  
  export type SearchByTextFilters = {
    text: string
    startDate: number
    userId?: string
  }

  export enum Call {
    NOT_FOUND_PLACEHOLDER= "Not found"
  }
  