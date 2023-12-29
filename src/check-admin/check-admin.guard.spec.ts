import { CheckAdminGuard } from './check-admin.guard';

describe('CheckAdminGuard', () => {
  it('should be defined', () => {
    expect(new CheckAdminGuard()).toBeDefined();
  });
});
