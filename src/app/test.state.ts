import { Injectable } from "@angular/core";
import { State } from '@ngxs/store';
import { testService } from './test.service';

export interface TestStateModel {
  oh: string;
}

@State<TestStateModel>({
  name: 'test',
  defaults: {
    oh: '123'
  }
})
@Injectable()
export class TestState {

  constructor(
    private testService: testService
  ) {
    debugger;
    testService.test();
  }

}
