import {Link, Store} from '../store/model';
import {Print, logger} from '../logger';
import {ajax} from 'rxjs/ajax';
import {config} from '../config';

const {rest} = config.notifications;

export function sendRestPutNotification(link: Link, store: Store) {
  const request = ajax({
    url: rest.endpoint,
    method: 'PUT',
    body: { "message": Print.inStock(link, store) }
  })

  const subscribe = request.subscribe(
    err => logger.error("✖ couldn't send pushover message"),
    res => logger.info('✔ pushover message sent')
  );
}
