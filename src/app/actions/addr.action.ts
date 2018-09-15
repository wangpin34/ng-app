// Addr.ts
import { Action } from '@ngrx/store';
import { Addr } from '../reducers/addr.model';

export enum AddrActionTypes {
  AddAddr = '[Addr] Add',
  AddAddrOK = '[Addr] Add OK',
  AddAddrFailed = '[Addr] Add Failed',
  RemoveAddr = '[Addr] Remove',
  RemoveAddrOK = '[Addr] Remove OK',
  RemoveAddrFailed = '[Addr] Remove Failed',
  UpdateAddr = '[Addr] Update',
  UpdateAddrOK = '[Addr] Update OK',
  UpdateAddrFailed = '[Addr] Update Failed',
  GetAddrs = '[Addr]s Get',
  GetAddrsOK = '[Addr]s Get OK',
  GetAddrsFailed = '[Addr]s Get Failed',
  GetAddr = '[Addr] Get',
  GetAddrOK = '[Addr] Get Ok',
  GetAddrFailed = '[Addr] Get Failed',
}

export class GetAddrs implements Action {
  readonly type = AddrActionTypes.GetAddrs;
}

export class GetAddrsOK implements Action {
  readonly type = AddrActionTypes.GetAddrsOK;
  constructor(public payload: Addr[]) {}
}

export class GetAddrsFailed implements Action {
  readonly type = AddrActionTypes.GetAddrsFailed;
}

export class GetAddr implements Action {
  readonly type = AddrActionTypes.GetAddr;
  constructor(public payload: string) {}
}

export class GetAddrOK implements Action {
  readonly type = AddrActionTypes.GetAddrOK;
  constructor(public payload: Addr) {}
}

export class GetAddrFailed implements Action {
  readonly type = AddrActionTypes.GetAddrFailed;
}

export class AddAddr implements Action {
  readonly type = AddrActionTypes.AddAddr;
  constructor(public payload: Addr) {}
}

export class AddAddrOK implements Action {
  readonly type = AddrActionTypes.AddAddrOK;
  constructor(public payload: Addr) {}
}

export class AddAddrFailed implements Action {
  readonly type = AddrActionTypes.AddAddrFailed;
  constructor(public payload: Addr) {}
}

export class UpdateAddr implements Action {
  readonly type = AddrActionTypes.UpdateAddr;
  constructor(public payload: Addr) {}
}

export class UpdateAddrOK implements Action {
  readonly type = AddrActionTypes.UpdateAddrOK;
  constructor(public payload: Addr) {}
}

export class UpdateAddrFailed implements Action {
  readonly type = AddrActionTypes.UpdateAddrFailed;
  constructor(public payload: Addr) {}
}

export class RemoveAddr implements Action {
  readonly type = AddrActionTypes.RemoveAddr;
  constructor(public payload: Addr) {}
}

export class RemoveAddrOK implements Action {
  readonly type = AddrActionTypes.RemoveAddrOK;
}

export class RemoveAddrFailed implements Action {
  readonly type = AddrActionTypes.RemoveAddrFailed;
  constructor(public payload: Addr) {}
}


export type AddrActionsUnion = GetAddrs | GetAddrsOK | GetAddrsFailed | GetAddr | GetAddrOK | GetAddrFailed | AddAddr | AddAddrOK | AddAddrFailed | UpdateAddr | UpdateAddrOK | UpdateAddrFailed |RemoveAddr | RemoveAddrOK | RemoveAddrFailed;