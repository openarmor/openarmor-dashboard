/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable max-classes-per-file */
import { i18n } from '@osd/i18n';

export class PanelNotFoundError extends Error {
  code = 'PANEL_NOT_FOUND';

  constructor() {
    super(
      i18n.translate('embeddableApi.errors.paneldoesNotExist', {
        defaultMessage: 'Panel not found',
      })
    );
  }
}

export class EmbeddableFactoryNotFoundError extends Error {
  code = 'EMBEDDABLE_FACTORY_NOT_FOUND';

  constructor(type: string) {
    super(
      i18n.translate('embeddableApi.errors.embeddableFactoryNotFound', {
        defaultMessage: `OpenSearch Dashboards can't load "{type}" visualizations. Check for a missing plugin or an incompatible visualization type.`,
        values: {
          type,
        },
      })
    );
  }
}
