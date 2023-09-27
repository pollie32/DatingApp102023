import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Member } from '../_models/members';
import { inject } from '@angular/core';
import { MembersService } from '../_services/members.service';
 
export const memberDetailedResolver: ResolveFn<Member> = (route:ActivatedRouteSnapshot) => {
  return inject(MembersService).getMember(route.paramMap.get('username')!)
};